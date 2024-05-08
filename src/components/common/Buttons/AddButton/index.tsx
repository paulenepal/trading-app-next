import React from "react";
import Icon from "../../icon";
import { openModal } from "@/utils/helpers/modalcontrols";
import CreateUserModal from "../../Modals/CreateUserModal";

const CREATE_USER_MODAL = 'createUserModal';

export default function CallCreateUserModal() {

  return (
    <>
      <div className="tooltip tooltip-left tooltip-secondary" data-tip="Create an account">
        <button
          className="btn glass bg-success"
          onClick={() => openModal(CREATE_USER_MODAL)}>
          <h1 className="text-normal">
            <Icon iconName="user-add-line" />
            &nbsp;Create Account
          </h1>
        </button>
        <CreateUserModal />
      </div>
    </>
  )
}

