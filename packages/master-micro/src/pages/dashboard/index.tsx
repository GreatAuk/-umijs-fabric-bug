import { Button } from 'antd';
import { useModel } from 'umi';

const Dashboard = () => {
  const { masterState, setMasterState } = useModel('@@qiankunStateForSlave', (model) => ({
    masterState: model.masterState,
    setMasterState: model.setMasterState,
  }));
  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={() => setMasterState(122)}>setMasterState, {masterState}</Button>
    </div>
  );
};

export default Dashboard;
