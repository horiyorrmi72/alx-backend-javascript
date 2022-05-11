import signUpUser from '/4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName,lastName,filename){
    const userData = await signUpUser(firstName,lastName).then((data) => ({
        status: 'fulfilled',
        value: data,
    }));

    const fileData = await uploadPhoto(filename).catch((err) => ({
        status:'rejected',
        value: err.toString(),
    }));
    
    return Promise.resolve([userData,fileData])
}