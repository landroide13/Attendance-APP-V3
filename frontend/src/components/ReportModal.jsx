import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';

const ReportPdf = ({ student, date }) =>{

    return(
        <Document>
            <Page size="A4" wrap>

                <Text>Report { date }</Text>
                <hr />
                <Text>Student Name: { student ? student[0].student.first_name : '' } { student ? student[0].student.last_name : '' }</Text>
                
                <View>
                    <View className="table table-striped dataTable-collapse table-hover text-center">
                        <View>
                            <View>
                                <Text scope="col">Subject</Text>
                                <Text scope="col">Date</Text>
                                <Text scope="col">Status</Text>
                            </View>
                        </View>
                    {
                        student.map(student => {

                            const filter = student.attendance.filter(attendance => attendance.date === date) 
                            console.log(student)

                            return(
                                <View>
                                    <View>
                                        <Text class="">{ student.lecture.lecture_name }</Text>
                                        {
                                            filter.map(attendance => (
                                                <>
                                                    <Text>{ attendance.date }</Text>
                                                    <Text>{ attendance.status }</Text>
                                                </>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        })
                    }
                    </View>
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
                <a href="#" class="btn btn-danger" onClick={onClose}>Close</a>

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


  
  









