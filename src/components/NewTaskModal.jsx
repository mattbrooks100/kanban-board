import React from "react";

const NewTaskModal = () => {
  return (
    <div
      className="modal-background absolute insert-0 w-full h-full bg-gray-600 bg-opacity-50"
      id="new-task-modal"
    >
      <div className="modal-container flex flex-col relative top-5 mx-auto w-3/4 bg-white rounded-lg shadow-lg">
        <button>X</button>
        <div className="modal-title">
          <div>New Task</div>
        </div>
        <div className="modal-body">
          <div>Form goes here</div>
        </div>
        <div className="modal-footer">
          <button>Submit</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
