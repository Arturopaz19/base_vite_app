import ReactDOM from 'react-dom/client'
import AppProviders from 'providers'
import './index.css'
import "antd/dist/antd.less"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
    <AppProviders />
)
