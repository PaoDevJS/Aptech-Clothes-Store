import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { store } from '../redux/Store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import ThemeConnext from '../context/ThemeContext'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeConnext>
      <RouterProvider router={router}/>
      <ToastContainer />
    </ThemeConnext>
  </Provider>
)
