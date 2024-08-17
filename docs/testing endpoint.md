# Testing Endpoints CRUD
## CREATE :

- POST to http://localhost:3000/employees with JSON body:

```json
{
    
    "name": "siwi",
    "number": "11jsjddjshre",
    "position": "HR",
    "department": "HR",
    "dateJoined": "2024-08-17T11:39:59.103Z",
    "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QB8UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGAcAigAWkZCTUQyMzAwMDk2YjAxMDAwMDc5MTgwMDAwZWExZDAwMDA3ZTIyMDAwMGI3NDkwMDAwMDY2MjAwMDA5ODcwMDAwMDg2OTIw",
    "status": "Probation"
}
```
## GET ALL DATA :

- GET to http://localhost:3000/employees 


## READ :

- GET to http://localhost:3000/employees/{id} 

## UPDATE :

- PUT to http://localhost:3000/employees/{id} with JSON body:

```json
{
    "id": "4",
    "name": "siwi",
    "number": "11jsjddjshre",
    "position": "HR",
    "department": "HR",
    "dateJoined": "2024-08-17T11:39:59.103Z",
    "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QB8UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGAcAigAWkZCTUQyMzAwMDk2YjAxMDAwMDc5MTgwMDAwZWExZDAwMDA3ZTIyMDAwMGI3NDkwMDAwMDY2MjAwMDA5ODcwMDAwMDg2OTIw",
    "status": "Tetap"
}
```

## DELETE :

- DELETE to http://localhost:3000/employees/{id}
