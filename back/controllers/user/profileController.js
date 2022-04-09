
//@desc GetUserProfile
//@route GET api/users/profile
//access Private

export const getUserProfile = (req, res) => {
    const user = {
        name: 'Alex',
        age: 21,
    }

    res.json(user)
}