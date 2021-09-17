import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Modal } from 'antd';
import { useModel } from 'umi';

type Props = {
  pointId: number | undefined;
};
const HistoryDialog: FC<Props> = ({ pointId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { setMasterState } = useModel('@@qiankunStateForSlave', (model) => ({
    setMasterState: model.setMasterState,
  }));

  useEffect(() => {
    if (pointId) {
      setIsModalVisible(true);
    }
  }, [pointId]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setMasterState(undefined);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default HistoryDialog;
