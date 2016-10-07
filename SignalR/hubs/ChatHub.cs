using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalR.hubs
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void SendMessage(MesageModel msg)
        {
            //Send to all
            //Clients.All.newMessage(string.Format("{0}: {1}", name, message));

            //Send to group
            //Clients.Group(msg.RoomName).newMessage(string.Format("{0}: {1}", msg.Name, msg.Message));

            //Send to group except self
            Clients.Group(msg.RoomName, Context.ConnectionId).newMessage(string.Format("{0}: {1}", msg.Name, msg.Message));
            
            //Send to specific id
            Clients.Client(Context.ConnectionId).newMessage(string.Format("Me: {0}", msg.Message));
        }

        public void JoinRoom(string roomName, string name)
        {
            Clients.OthersInGroup(roomName).newNotification(name + " has joined the room.");
            Groups.Add(Context.ConnectionId, roomName);
        }

        public void LeaveRoom(string roomName, string name)
        {
            Clients.Group(roomName, Context.ConnectionId).newNotification(name + " has left the room.");
            Groups.Remove(Context.ConnectionId, roomName);
        }
    }

    public class MesageModel
    {
        public string Message { get; set; }
        public string RoomName { get; set; }
        public string Name { get; set; }
    }
}