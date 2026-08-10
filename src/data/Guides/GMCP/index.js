const GMCPGuideData = [
  {
    title: 'GMCP - Generic MUD Communication Protocol',
    data: `Some clients support a protocol called GMCP, which allows the MUD server and
your MUD client to communicate data back and forth unobtrusively.Subscribing
to some GMCP modules will provide automatic updates, such as Char.Vitals.

Receiving Char.Vitals updates automatically allows your client to do actions
such as updating vitals gauges, without having to parse vitals prompts.

Below is the list of GMCP events and requests that Merentha will respond to.

    Core.Ping[client request]

Core.Supports.Set, Core.Supports.Add, Core.Supports.Remove[client request]
    Tells the mud which GMCP packages your client supports, e.g.
    ["Char 1", "Room 1"].The mud uses this to decide whether to send certain
data.`,
  },
  {
    title: 'Character Info',
    data: `Char.Info [server event at login] and Char.Info.Get [client request]
{
    "name": string,
    "fullname": string,
    "class": string,
    "subclass": string,
    "race": string,
    "level": int,
    "immortal": int,
}`,
  },
  {
    title: 'Character Vitals',
    data: `Char.Vitals [server event] and Char.Vitals.Get [client request]
{
    "hp": int, "maxhp": int,
    "sp": int, "maxsp": int,
    "mp": int, "maxmp": int,
    "xp": int, "maxxp": int,
}`,
  },
  {
    title: 'Character Stats',
    data: `Char.Stats [server event] and Char.Stats.Get [client request]
{
    "strength": { "base": int, "bonus": int, "max": int },
    "charisma": { "base": int, "bonus": int, "max": int },
    "constitution": { "base": int, "bonus": int, "max": int },
    "dexterity": { "base": int, "bonus": int, "max": int },
    "intelligence": { "base": int, "bonus": int, "max": int },
    "wisdom": { "base": int, "bonus": int, "max": int },
}`,
  },
  {
    title: 'Character Body',
    data: `Char.Body [server event] and Char.Body.Get [client request]
{
    "limbs": {
        "limb name": {
            "damage": int,
            "armour": int,
            "magic": int,
        },
    },
    "severed": [string],
}`,
  },
  {
    title: 'Communications',
    data: `Comm.Channel.Text [server event]
{
    "msg": string,
}`,
  },
  {
    title: 'Room Information',
    data: `Room.Info.Get [client request]
{
    "id": string,
    "name": string,
    "exits": {
        "string": string,
    },
    "area": string,
}`,
  },
];

export default GMCPGuideData;
