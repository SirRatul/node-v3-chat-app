const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser, 
    removeUser,
    getUser, 
    getUsersInRoom
}

/* console.log(addUser({
    id: 1, 
    username: 'Ratul', 
    room: 'Test'
}))

console.log(addUser({
    id: 2, 
    username: 'Tisha', 
    room: 'Test'
}))

console.log(addUser({
    id: 3, 
    username: 'Tisha', 
    room: 'Test1'
})) */

/* console.log('Users List:')
console.log(users)
removeUser(3)

console.log('Users List After Remove:')
console.log(users)  */

/* const user = getUser(1)
console.log(user)  */
// console.log(getUsersInRoom('test'))