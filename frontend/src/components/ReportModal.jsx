import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, Document, Page, Text, View, Image } from '@react-pdf/renderer';

const pic1 = new URL('../assets/images/madarsa_logo.jpg', import.meta.url).href

const ReportPdf = ({ data }) =>{

    const styles = {

        page: {
            display:'flex',
            flexDirection: 'column',
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
            alignItems:'center',
            justifyContent: 'center',
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
            fontWeight: 'bold',
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
            marginRight: 13,
            marginLeft: 13,
        },
    }

    const [{ lecture_name, term }] = data && data

    const [{ attendance } = { }] = data && data.length > 0 ? data : [{}] 

    const [{ students } = { }] = data && data.length > 0 ? data : [{}] 

    const studentName = id => { 
        let student = students && students.filter(student => student.id === id)
        const [ data ] = student
        const { first_name, last_name } = data || { }
        return first_name + " " + last_name
      }  

    return(
        <Document>
            <Page size="A4" style={styles.page} wrap>
                <Image style={styles.image} source={pic1} />
                <Text style={styles.title}>Subject: { lecture_name }</Text>
                <Text style={styles.subtitle}> Term:  { term.term } - { term.year }</Text>
                <hr />
                <View style={styles.tableSection}>
                    
                    <View style={styles.headerSection}>
                        <Text style={styles.subtitle}>Student</Text>
                        <Text style={styles.subtitle}>Date</Text>
                        <Text style={styles.subtitle}>Status</Text>
                    </View>

                    {
                      attendance && attendance.map(att => (
                                            
                        <View style={styles.rowSection}>
                            <Text style={styles.rowText}>{ studentName(att.student_id) }</Text>
                            <Text style={styles.rowText}>{ new Date(att.attendance_time).getDate() + '/' + (new Date(att.attendance_time).getMonth() + 1)+ "/" + new Date(att.attendance_time).getFullYear() }</Text>
                            <Text style={styles.rowText}>{ att.status }</Text>
                        </View>
                                           
                        ))
                    }
                    
                </View>
            </Page>
        </Document>
    )
}

function ReportModal({ data, isOpen, onClose}) {

    console.log(data)

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
    <div className="card" style={{ ...styles.main }}>
        
        <div className="card-body">

            <ReportPdf  data={data} />
        
            <div className="btn-group">
                <a href="#" className="btn btn-danger mr-5 mt-7" onClick={onClose}>Close</a>

                <DownLoadBtn data={data}  />
                
            </div>
        </div>
    </div>
  )
} 

export default ReportModal


const DownLoadBtn = ({ data }) => {

    return(
        <PDFDownloadLink document={<ReportPdf data={data} />} fileName={`report.pdf`}>
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download Report'
            }
        </PDFDownloadLink>
    )
}


  
  









