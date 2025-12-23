import { type RefObject } from "react";
import TransactionForm from "./TransactionForm";

type ModalProps = {
  ref: RefObject<HTMLDialogElement | null>,
}; 

const TransactionModal = ({ ref}:ModalProps) => {

  return (<dialog className=" backdrop:backdrop-blur-md mx-auto p-5 my-10 rounded-2xl" ref={ref}>
    <TransactionForm ref={ref}/>
  </dialog>)
};

export default TransactionModal;
