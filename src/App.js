import React, {useState} from "react";
import sample from "./sample.pdf";
import {Document, Page} from "react-pdf";

const App = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={sample}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default App;
