 
export const BookingCols = [
    { field: '_id', headerClassName: 'header', headerName: 'ID', width: 70 },
    { field: 'fullName',
      headerName:'Customer Name',
      width:150,
     },

     { field: 'email',
     headerClassName: 'header',
      headerName:'Email',
      width:230,
     },
     { field: 'room',
     headerClassName: 'header',
      headerName:'Room No',
      width:180,
     },
 
     { field: 'duration',
     headerClassName: 'header',
      headerName:'Duration',
      width:200,
       renderCell:(params)=>{
        return (

            <>
             <span>{params.row.startDate}</span>
             <span>-{params.row.endDate}</span>
            </>

        );
       }

      },
      { field: 'amount',
      headerClassName: 'header',
      headerName:'Amount Paid',
      width:180,
    }
      
  ];
export const BookingRow = [
    { id: 1, 
      fullName: 'Sayan Batabyal',
      email:'sayan@gmail.com',
      room:'D404',
      startDay:'24-Feb-2023',
      endDay:'26-Feb-2023',
      amount: 1000
    },
    { id: 2, 
        fullName: 'Sayan Batabyal',
        email:'sayan@gmail.com',
        room:'D404',
        startDay:'24-Feb-2023',
        endDay:'26-Feb-2023',
        amount: 1000
      },
      { id: 3, 
        fullName: 'Sayan Batabyal',
        email:'sayan@gmail.com',
        room:'D404',
        startDay:'24-Feb-2023',
        endDay:'26-Feb-2023',
        amount: 1000
      },
      { id: 4, 
        fullName: 'Sayan Batabyal',
        email:'sayan@gmail.com',
        room:'D404',
        startDay:'24-Feb-2023',
        endDay:'26-Feb-2023',
        amount: 1000
      },
      { id: 5, 
        fullName: 'Sayan Batabyal',
        email:'sayan@gmail.com',
        room:'D404',
        startDay:'24-Feb-2023',
        endDay:'26-Feb-2023',
        amount: 1000
      },
      { id: 6, 
        fullName: 'Sayan Batabyal',
        email:'sayan@gmail.com',
        room:'D404',
        startDay:'24-Feb-2023',
        endDay:'26-Feb-2023',
        amount: 1000
      },
      { id: 7, 
        fullName: 'Sayan Batabyal',
        email:'sayan@gmail.com',
        room:'D404',
        startDay:'24-Feb-2023',
        endDay:'26-Feb-2023',
        amount: 1000
      },

    
  ];
   
export const RoomsCols = [
    { field: 'id', headerClassName: 'header', headerName: 'ID', width: 70 },

     { field: 'type',
     headerClassName: 'header',
      headerName:'Room Type',
      width:230,
     },
     { field: 'room',
     headerClassName: 'header',
      headerName:'Room No',
      width:180,
     },

      { field: 'amount',
      headerClassName: 'header',
      headerName:'Price',
      width:180,
    }
      
  ];

export const RoomsRow = [
    { id: 1, 
      type: 'A',
      room:'A404',
      amount: 1000
    },
    { id: 2, 
        type: 'B',
        room:'B404',
        amount: 6000
      },
      { id: 3, 
        type: 'A',
        room:'A204',
        amount: 1000
      },
      { id: 4, 
        type: 'B',
        room:'A408',
        amount: 1000
      },
      { id: 5, 
        type: 'B',
        room:'B408',
        amount: 2000
      },
      { id: 6, 
        type: 'B',
        room:'B402',
        amount: 3000
      },
  ];