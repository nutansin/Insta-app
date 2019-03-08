import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {fetchSavedPost} from '../actions/postAction';
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
        var self = this;
        $(function() { 
            $('textarea').froalaEditor({
                toolbarButtons: ['save','insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo'],
                height: 400,
                width: 800,
                // Set the image upload parameter.
                imageUploadParam: 'image_param',
                // Additional upload params.
                // imageUploadURL: '/',
                imageUploadParams: {id: 'edit'},  
                // Set request type.
                imageUploadMethod: 'POST',

                // Set max image size to 5MB.
                imageMaxSize: 5 * 1024 * 1024,
                // Allow to upload PNG and JPG.
                imageAllowedTypes: ['jpeg', 'jpg', 'png'],
                // Set the save param.
                saveParam: 'content',
        
                // HTTP request type.
                saveMethod: 'POST',
        
                // Additional save params.
                saveParams: {id: 'froala-editor'}
            })
            .on('froalaEditor.image.inserted', function (e, editor, $img, response) {
                // There is no server here so saving image in localStorage for now 
                var userpost = [];
                if(localStorage.getItem('savedPost')) {
                    userpost = JSON.parse(localStorage.getItem('savedPost'));
                    userpost.push({link: $img[0].currentSrc});
                    localStorage.setItem('savedPost', JSON.stringify(userpost));
                } else {
                    localStorage.setItem('savedPost', JSON.stringify([{link: $img[0].currentSrc}]));
                }
            })
              .on('froalaEditor.save.after', function (e, editor, response) {
                // After successfully save request.
              })
              .on('froalaEditor.save.error', function (e, editor, error) {
                // Do something here.
                self.props.fetchSavedPost();
                self.props.hideEditor();
              })
        }); 
    }

    render=()=> {
        return (
            <div className="editor-wrapper">
                <div onClick={this.closeEditor} className="editor-overlay"></div>
                <textarea id="froala-editor" name="content"></textarea>
                <div className="btn-wrapper">
                    <button id="close-btn" onClick={this.closeEditor}>Close</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=> ({
    savedPost: state.savedPost.post
})
export default connect(mapStateToProps, {fetchSavedPost})(Editor);