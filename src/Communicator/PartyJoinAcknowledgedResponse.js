const User = require('../User');

class PartyJoinAcknowledgedResponse {

	constructor (communicator, data) {
		
		this.communicator = communicator;

		this.sender = new User(this.communicator.getClient(), data);

		this.party_id = data.party_id;
		
		this.time = data.time;
		
	}

	send (to) {

		return this.communicator.sendRequest({

			to,

			body: JSON.stringify({

				type: 'com.epicgames.party.joinacknowledged.response',

				payload: {
					partyId: this.party_id
				},

				timestamp: new Date()

			})

		});

	}

}

module.exports = PartyJoinAcknowledgedResponse;