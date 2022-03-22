// import { ToastProvider, useToasts } from 'react-toast-notifications';
//
// const FormWithToasts = () => {
//     const {
//         addToast,
//         removeToast,
//         removeAllToasts,
//         updateToast,
//         toastStack,
//     } = useToasts();
//
//     const onSubmit = async value => {
//         if (error) {
//             addToast(error.message, { appearance: 'error' });
//         } else {
//             addToast('Saved Successfully', { appearance: 'success' });
//         }
//     };
//
//     return <form onSubmit={onSubmit}>...</form>;
// };
//
// export default FormWithToasts;