// import React, {Component} from 'react';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import Header from "../Header/Header";
//
//
// class ContactList extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {groups: [], isLoading: true};
//         this.remove = this.remove.bind(this);
//     }
//
//     componentDidMount() {
//         this.setState({isLoading: true});
//
//         fetch('api/groups')
//             .then(response => response.json())
//             .then(data => this.setState({groups: data, isLoading: false}));
//     }
//
//     async remove(id) {
//         await fetch(`/api/group/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         }).then(() => {
//             let updatedGroups = [...this.state.groups].filter(i => i.id !== id);
//             this.setState({groups: updatedGroups});
//         });
//     }
//     render() {
//         const {groups, isLoading} = this.state;
//
//         if (isLoading) {
//             return <p>Loading...</p>;
//         }
//
//         const contactList = groups.map(group => {
//             const address = `${group.address || ''} ${group.city || ''} ${group.stateOrProvince || ''}`;
//             return <tr key={group.id}>
//                 <td style={{whiteSpace: 'nowrap'}}>{group.name}</td>
//                 <td>{address}</td>
//                 <td>{group.events.map(event => {
//                     return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: '2-digit'
//                     }).format(new Date(event.date))}: {event.title}</div>
//                 })}</td>
//                 <td>
//                     <ButtonGroup>
//                         <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
//                         <Button size="sm" color="danger" onClick={() => this.remove(group.id)}>Delete</Button>
//                     </ButtonGroup>
//                 </td>
//             </tr>
//         });
//         return (
//             <div>
//              <Header/>
//             </div>
//         );
//     }
// }
//
// export default ContactList;