import { ModalProps } from "@/stores/modal-store";
import css from "./modal.module.scss";
import { useTransition } from "@/hooks/use-transition";
import { Button, Modal } from "@mantine/core";

interface ConfirmModalProps {
  title?: string;
  content: React.ReactNode;
}

export default function ConfirmModal({
  title = "Confirm",
  content,
  onClose,
  onSuccess,
}: ModalProps<ConfirmModalProps>) {
  const { modifier, onAnimationEnd, exit } = useTransition();

  const onCloseWithExit = () => {
    exit(() => onClose());
  };

  return (
    <Modal
      onClose={onCloseWithExit}
      title={title}
      opened
      centered
      withinPortal={false}
      overlayProps={{ opacity: 0 }}
    >
      <div>
        <p>{content}</p>
      </div>
      <div className={css.modalBtnBox}>
        <Button variant="outline" onClick={onCloseWithExit}>
          취소
        </Button>
        <Button onClick={() => exit(() => onSuccess(true))}>확인</Button>
      </div>
    </Modal>
  );
}
