import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
// @ts-ignore
import livret from "../assets/livret_mat_natecia.pdf";
import { useState } from "react";
import {
  Center,
  Flex,
  Icon,
  Spacer,
  Stack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { VscTriangleLeft } from "react-icons/vsc";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfNatecia = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfWidth = 300;
  const pdfHeight = (pdfWidth * 1.4142) / 2;
  const pagesShown = 2;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box>
      <Center>
        <Box height={pdfHeight} width={pdfWidth} bg={"blue.300"}>
          <Document file={livret} onLoadSuccess={onDocumentLoadSuccess}>
            <Stack
              direction={"row"}
              height={pdfHeight}
              width={pdfWidth}
              spacing={0}
            >
              <Page
                pageNumber={pageNumber}
                canvasBackground="white"
                renderTextLayer={false}
                width={pdfWidth / pagesShown}
              />
              <Page
                width={pdfWidth / pagesShown}
                pageNumber={pageNumber + 1}
                canvasBackground="white"
                renderTextLayer={false}
              />
            </Stack>
          </Document>
        </Box>
      </Center>
      <Flex align={"center"} justify={"center"} gap={4}>
        {pageNumber > 1 && (
          <Icon
            as={ArrowLeftIcon}
            boxSize={3}
            onClick={() => setPageNumber(pageNumber - 1)}
          />
        )}

        <Text sx={{ cursor: "default" }}>
          {pageNumber}-{pageNumber + 1} / {numPages}
        </Text>

        {pageNumber <= numPages - pagesShown && (
          <Icon
            as={ArrowRightIcon}
            boxSize={3}
            onClick={() => setPageNumber(pageNumber + 1)}
          />
        )}
      </Flex>
    </Box>
  );
};

export default PdfNatecia;
