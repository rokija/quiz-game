import React, { Component } from "react";
import "./PostModal.css";

class extends Component {
    render() {
        const { onClose, onInputChange, onImageUpload, onPostSubmit } = this.props;

        return (
            <div className="PostModal">
                <div className="PostModal__content">
                    <div className="PostModal__content__title">upload image</div>
                    <form>
                        <div className="form-group">
                            <label>Caption:</label>
                            <input
                                onChange={onInputChange}
                                className="form-control" type="text" />
                        </div>

                        <div className="form-group">
                            <input
                                onChange={onImageUpload}
                                type="file" className="form-control-file" />
                        </div>
                    </form>
                    <div className="PostModal__buttons">
                        <button onClick={onClose} className="btn btn-light">
                            cancel
            </button>
                        <button
                            onClick={onPostSubmit}
                            className="btn btn-primary">Upload</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostModal;