import ToolPage from '../components/ToolPage';
import { tools } from '../data/tools';

function Docker() {
  return <ToolPage tool={tools[2]} />;
}

export default Docker;