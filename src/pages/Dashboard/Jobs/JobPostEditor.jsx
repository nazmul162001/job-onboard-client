import React from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

const JobPostEditor = ({ value, setValue}) => {

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' },],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', ],
    ],
  };

  const placeholder = 'Write description ...';

  const formats = ['header',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet', 'indent',
    'link', ];

  const { quill , quillRef } = useQuill({ modules, formats, placeholder });


  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML)
        setValue(quillRef.current.firstChild.innerHTML)
      });
    }
  }, [quill, quillRef , setValue]); 

  return (
    <div className='container mx-auto  flex '>
      <div style={{  height: 200 }}>
        <div ref={quillRef} />
      </div>
      <div dangerouslySetInnerHTML={{__html:value}}>

      </div>
    </div>
  );
};

export default JobPostEditor;