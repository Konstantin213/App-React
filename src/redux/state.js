let state = {

    profilePage : {
        posts : [
            { id: 1, message: "Hey, i am noodles", likeCount: "10" },
            { id: 2, message: "Helloy, it lessons", likeCount: "15" },
            { id: 3, message: "Yo", likeCount: "11" },
            { id: 4, message: "Something", likeCount: "5" }
          ]
    },

    dialogsPage : {
        dialogs : [
            { id: 1, name: "Mihail" },
            { id: 2, name: "Sveta" },
            { id: 3, name: "Kukis" },
            { id: 4, name: "Charger" }
          ],
        message : [
            { id: 1, message: "Hi" },
            { id: 2, message: "Ho are you" },
            { id: 3, message: "Hello" }
          ] 
    },

    sidebar : {
      friendsPage : [
        {id : 1, name : "Kratos" },
        {id : 2, name : "Serega" },
        {id : 3, name : "Vasilisa" }
      ]   
}
}

export default state;