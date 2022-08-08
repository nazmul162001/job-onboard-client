import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
const AddEmployee = () => {
  return (
    <div>

<input type="checkbox" id="add-new-employee-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="add-new-employee-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>



      <label for="add-new-employee-modal" className="mr-5 flex items-center bg-base-300 py-2 px-3 rounded-md font-bold cursor-pointer">
        <BsPersonPlusFill /> Add New
      </label>
    </div>
  );
};

export default AddEmployee;
