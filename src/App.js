import './App.css'
import DocumentViewer from './components/DocumentViewer.js'
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import dummyPDF from './assets/dummy.pdf';

function App() {
  // const docs = [
  //   { uri: require(dummyPDF) },
  // ];

  return (
    <div>
      <h1 className='font-bold text-2xl'>Document Viewer App</h1>
      <DocumentViewer />
      {/* <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          }
        }}
        style={{ height: 1000 }}
      /> */}
    </div>
  );
}

export default App;
