import React from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';
import toast from 'react-hot-toast';

const JobPostEditor = ({ value, setValue }) => {

  const modules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' },],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link',],
      ['clean']
    ],
  };

  const placeholder = 'Write description ...';

  const formats = ['size', 'header',
    'bold', 'italic', 'underline', 'strike ', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'clean'];

  const { quill, quillRef } = useQuill({ modules, formats, placeholder });


  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML)
        if (quill.getLength() === 0) {
          toast.error('Description is empty', { position: "top-center" });
          return false
        }
        else {
          setValue(quillRef.current.firstChild.innerHTML)
        }
      });
    }
  }, [quill, quillRef, setValue]);

  return (
    <div className='container mx-auto flex '>
      <div style={{ width: 1440, height: 250 }} >
        <div ref={quillRef} />
      </div>
    </div>
  );
};

export default JobPostEditor;


//https://github.com/quilljs/quill/issues/163
//https://stackoverflow.com/questions/61452368/how-to-show-character-counter-in-a-react-quill