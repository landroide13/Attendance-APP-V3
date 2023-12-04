import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';

const ReportPdf = ({ student, date }) =>{

    const styles = {

        page: {
            backgroundColor: "#ffffff",
            width: '100%'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },

        rowSection:{
            display:'flex',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 8
        },
        
        tableSection:{
            backgroundColor: "#f6f6f5",
            display: 'flex',
            flexDirection: "column",
            width: '100%',
            padding: 5,
        },

        headerSection:{
            display: "flex",
            flexDirection: "row",
            alignItems:'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10
        },

        image: {
            height: 100,
            width: 100
        },
        title: {
            fontSize: 20,
            marginBottom: 8,
            marginTop: 8,
            fontWeight: 'bold'
        },
        subtitle: {
            fontSize: 17, 
            fontWeight: '600',
            marginRight: 13,
            marginLeft: 13,
            marginBottom: 10
        },
        
        text: {
            fontSize: 18,
            marginLeft: 4
        },

        rowText:{
            fontSize: 18,
            marginLeft: 4,
            marginRight: 13,
            marginLeft: 13,
        },

    }

    return(
        <Document>
            <Page size="A4" style={styles.page} wrap>

                <Text style={styles.title}>Report { date }</Text>
                <hr />
                <Text style={styles.subtitle}>Student Name: { student ? student[0].student.first_name : '' } { student ? student[0].student.last_name : '' }</Text>
                
                <View style={styles.tableSection}>
                    
                    <View style={styles.headerSection}>
                        <Text style={styles.subtitle}>Subject</Text>
                        <Text style={styles.subtitle}>Date</Text>
                        <Text style={styles.subtitle}>Status</Text>
                    </View>

                    {
                        student.map(student => {

                            const filter = student.attendance.filter(attendance => attendance.date === date) 
                            console.log(student)

                            return(
                                <View style={styles.rowSection}>
                                    <View >
                                        <Text style={styles.rowText}>{ student.lecture.lecture_name }</Text>
                                        {
                                            filter.map(attendance => (
                                                <>
                                                    <Text style={styles.rowText}>{ attendance.date }</Text>
                                                    <Text style={styles.rowText}>{ attendance.status }</Text>
                                                </>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </Page>
        </Document>
    )
}

function ReportModal({ student, date, isOpen, onClose}) {

    if (!isOpen) return null;

    const styles = {
        main: {
            backgroundColor: '#fefefe',
            width: "60%",
            position: "fixed",
            top: '9em',
            left: '9em',  
            height: "75%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
      };

  return (
    <div class="card" style={{ ...styles.main }}>
        
        <div class="card-body">

            <ReportPdf student={student} date={date} />
        
            <div class="btn-group">
                <a href="#" class="btn btn-danger mr-5 mt-7" onClick={onClose}>Close</a>

                <DownLoadBtn student={student} date={date}  />
                
            </div>
        </div>
    </div>
  )
}

export default ReportModal


const DownLoadBtn = ({ student, date }) => {

    return(
        <PDFDownloadLink document={<ReportPdf student={student} date={date} />} fileName={`${date}_report.pdf`}>
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download Report'
            }
        </PDFDownloadLink>
    )
}


  
  









