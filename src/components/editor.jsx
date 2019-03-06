import React, { Component } from 'react';
import $ from 'jquery';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'codemirror/lib/codemirror.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_editor.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'codemirror/lib/codemirror.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/editor.css';

class Editor extends Component {
    constructor() {
          super();
          this.state={
              uploadedImage:''
          }
    }
    closeEditor=()=> {
        this.props.hideEditor();
    }

    componentDidMount=()=> {
        $(function() { 
            $('textarea').froalaEditor({
                toolbarButtons: ['insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo'],
                height: 400,
                width: 800,
                // Set the image upload parameter.
                imageUploadParam: 'image_param',
                // Additional upload params.
                // imageUploadURL: '/public',
                imageUploadParams: {id: 'edit'},  
                // Set request type.
                imageUploadMethod: 'POST',

                // Set max image size to 5MB.
                imageMaxSize: 5 * 1024 * 1024,
                // Allow to upload PNG and JPG.
                imageAllowedTypes: ['jpeg', 'jpg', 'png']
            })
            .on('froalaEditor.image.beforeUpload', function (e, editor, images) {
            // Return false if you want to stop the image upload.
            
            console.log("this.props.location.pathname "+this.props)
            // console.log("before upload ", images, e ,editor)
            })
            .on('froalaEditor.image.uploaded', function (e, editor, response) {
            // Image was uploaded to the server.
            console.log("after upload")
            })
            .on('froalaEditor.image.inserted', function (e, editor, $img, response) {
                // Image was inserted in the editor.
                console.log(e.target.files,$img, response);
            })
        }); 
    }

    render=()=> {
        return (
            <div className="editor-wrapper">
                <div onClick={this.closeEditor} className="editor-overlay"></div>
                <textarea id="froala-editor" name="content"></textarea>
                <div className="btn-wrapper">
                    <button id="save-btn">Save</button>
                    <button id="close-btn" onClick={this.closeEditor}>Close</button>
                </div>
            </div>
        )
    }
}
export default Editor;


