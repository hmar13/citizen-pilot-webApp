import { baseUrl } from '../config'

// Login
export const fetchUserData = (username: string, password: string) =>
  fetch(`${baseUrl}/auth/login/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.status <= 400 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error('error', err));


interface registerInterface {
  fname: string;
  lname: string;
  email: string;
  password: string;
  department?: string;
  position?: string;
  access?: string
}
// Register
// user is an object
export const registerEmployee = (user: registerInterface) =>
  fetch(`${baseUrl}/auth/empsignup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// news
export const getAllNews = () =>
  fetch(`${baseUrl}/news`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// get news by id
export const getNewsItem = (id: number) =>
  fetch(`${baseUrl}/news/${id}`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// post news
// why can't i give newsItem this newsItemInterface?
// interface newsItemInterface {
//   title: string;
//   shortDescription: string;
//   longDescription: string;
//   location: string;
//   categories: string;
//   image: string;
//   date: string;
// }

export const postNews = (token: string, newsItem: any) =>
  fetch(`${baseUrl}/news`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: newsItem
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// edit news item. returns updated news
export const editNewsItem = (token: string, id: number, newsItem: any) =>
  fetch(`${baseUrl}/news/${id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: newsItem
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// delete news item
export const deleteNewsItem = (token: string, id: number) =>
  fetch(`${baseUrl}/news/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));



// city contacts

// get all contacts
export const getContacts = () =>
  fetch(`${baseUrl}/contacts`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// interface ContactInterface {
//   titlte: string;
//   phone: number;
//   email: string;
//   image: string;
// }
// save new contact
export const postContact = (token: string, contact: any) =>
  fetch(`${baseUrl}/contacts`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: contact
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// edit contact. returns updated contact
export const editContact = (token: string, id: number, contact: any) =>
  fetch(`${baseUrl}/contacts/${id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: contact
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// delete contact
export const deleteContact = (token: string, id: number) =>
  fetch(`${baseUrl}/contacts/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));



// Projects


// get all projects
export const getProjects = () =>
  fetch(`${baseUrl}/projects`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// get project by id
export const getProject = (id: number) =>
  fetch(`${baseUrl}/projects/${id}`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));



// interface projectInterface {
//   title: string;
//   description: string;
//   location: string;
//   completion: number;
//   image: string;
// }

// save new project
export const postProject = (token: string, project: any) =>
  fetch(`${baseUrl}/projects`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: project
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// edit project
export const editProject = (token: string, id: number, project: any) =>
  fetch(`${baseUrl}/projects/${id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: project
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// delete project
export const deleteProject = (token: string, id: number) =>
  fetch(`${baseUrl}/projects/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));





// Reports / problems

// get all reports
export const getReports = () =>
  fetch(`${baseUrl}/reports`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


export const getReportById = (id: number) =>
  fetch(`${baseUrl}/reports/${id}`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// delete report/problem
export const deleteReport = (token: string, id: number) =>
  fetch(`${baseUrl}/reports/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));




// Solutions / proposals

// get all proposals
export const getProposals = () =>
  fetch(`${baseUrl}/proposal`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// get approved proposals
export const getApprovedProposals = () =>
  fetch(`${baseUrl}/proposal/approved`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// get proposal by user id (liked ones)
export const getProposalById = (id: number) =>
  fetch(`${baseUrl}/proposal/${id}`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// interface ProposalInterface {
//   title: string;
//   description: string;
//   location: string;
//   image: string;
//   votes: number;
//   approved: boolean;
//   userId: number;
// }

// edit approved proposals
export const editApprovedProposal = (token: string, id: number, proposal: any) =>
  fetch(`${baseUrl}/proposal/approved/true/${id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: proposal
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));



// edit incoming proposals
export const editProposal = (token: string, id: number, proposal: any) =>
  fetch(`${baseUrl}/proposal/approved/false/${id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: proposal
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// delete proposal
export const deleteProposal = (token: string, id: number) =>
  fetch(`${baseUrl}/proposal/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// get votes
export const getAllVotes = () =>
  fetch(`${baseUrl}/votes`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));