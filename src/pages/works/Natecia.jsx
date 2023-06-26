import Work from "../../components/Work";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import sample from "../../assets/livret_mat_natecia.pdf";
import { useState } from "react";
import { Stack } from "@chakra-ui/react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Natecia = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Work>This is a template text.</Work>
      <div>
        <Document file={sample} onLoadSuccess={onDocumentLoadSuccess}>
          <Stack direction={"row"} overflowX={"scroll"}>
            <Page pageNumber={pageNumber} canvasBackground="white" />
            <Page pageNumber={pageNumber + 1} canvasBackground="white" />
          </Stack>
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={() => setPageNumber(pageNumber - 1)}>Prev</button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </>
  );
};
export default Natecia;
