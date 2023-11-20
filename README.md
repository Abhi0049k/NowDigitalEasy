# NowDigitalEasy

### Endpoints

Following are the endpoints that are exposed for managing user data: 


1. **Fetching Details of all User:**
    - Endpoint: `https://cute-ruby-catfish-hat.cyclic.app/api/users/`
    - Method: GET

2. **Fetching Details of a Single User:**
    - Endpoint: `https://cute-ruby-catfish-hat.cyclic.app/api/users/655b93945226d629a4c95c4b/`
    - Method: GET
    - Param: id

3. **Creating New User:**
    - Endpoint: `https://cute-ruby-catfish-hat.cyclic.app/api/users/`
    - Method: POST
    - Body: User Details

    Example Body: 
    ```json
    {
        "name": "Name",
        "role": "Role",
        "email": "email",
        "phoneNumber": "phoneNumber"
    }
    ```

4. **Deleting User Details:**
    - Endpoint: `https://cute-ruby-catfish-hat.cyclic.app/api/users/655b93945226d629a4c95c4b`
    - Method: DELETE
    - Param: id

5. **Updating User Details:**
    - Endpoint: `https://cute-ruby-catfish-hat.cyclic.app/api/users/655b93945226d629a4c95c4b`
    - Method: PUT
    - Param: id
    - Body: New User Details

    Example Body:
    ```json
    {
        "name": "Updated name",
        "role": "Updated role",
        "email": "Updated email",
        "phoneNumber": "Updated Phone Number"
    }
    ```
##
Backend URL 
https://cute-ruby-catfish-hat.cyclic.app/