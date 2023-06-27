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

const pdfNatecia = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfHeight = 400;
  const pdfWidth = pdfHeight / 1.4142;
  const pagesShown = 2;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages + 1);
  }

  return (
    <Box>
      <Document file={livret} onLoadSuccess={onDocumentLoadSuccess}>
        <Center>
          <Stack
            direction={"row"}
            height={pdfHeight / 2}
            width={pdfWidth}
            spacing={0}
          >
            <Page
              pageNumber={pageNumber}
              canvasBackground="white"
              renderTextLayer={false}
              height={pdfHeight / 2}
            />
            <Page
              height={pdfHeight / 2}
              pageNumber={pageNumber + 1}
              canvasBackground="white"
              renderTextLayer={false}
            />
          </Stack>
        </Center>
      </Document>
      <Flex align={"center"} justify={"center"} gap={4}>
        {pageNumber > 1 && (
          <Icon
            as={ArrowLeftIcon}
            boxSize={3}
            onClick={() => setPageNumber(pageNumber - 1)}
          />
        )}

        <Text>
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

export default pdfNatecia;
