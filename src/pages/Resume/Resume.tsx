import { Document, Page, pdfjs } from "react-pdf";

import { Container } from "./style";
import pdf_file from "../../assets/brijesh resume.pdf";
import { useState } from "react";

// Configure the worker path for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const onDocumentSuccess = ({ numPages }: { numPages: number }) => {
    console.log(numPages);
    setNumPages(numPages);
  };
  return (
    <Container>
      {numPages !== null && (
        <Document file={pdf_file} onLoadSuccess={onDocumentSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={400} // Set an appropriate width for the page
            />
          ))}
        </Document>
      )}
    </Container>
  );
};

// Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });
