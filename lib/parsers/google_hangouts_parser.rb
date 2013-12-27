require 'json'
module GoogleHangoutsParser
  GOOGLE_HANGOUTS_ID = 2

  def self.parse
    json = JSON.parse(File.read('../sources/Hangouts.json'))

    json["conversation_state"].each do |conversation|
      participant_1 = conversation["conversation_state"]["conversation"]["participant_data"][0]
      participant_2 = conversation["conversation_state"]["conversation"]["participant_data"][1]

      contact_1 = Contact.contact_from_username(participant_1["fallback_name"], GOOGLE_HANGOUTS_ID)
      contact_2 = Contact.contact_from_username(participant_2["fallback_name"], GOOGLE_HANGOUTS_ID)

      conversation["conversation_state"]["event"].each do |event|
        begin
          gchat_sender_id = event["sender_id"]["chat_id"]

          text            = event["chat_message"]["message_content"]["segment"][0]["text"]
          timestamp       = Time.at(event["timestamp"].to_i/1000000).utc.to_datetime.to_s
          to_contact_id   = participant_1["id"]["chat_id"] ==  gchat_sender_id ? contact_2.id : contact_1.id
          from_contact_id = participant_1["id"]["chat_id"] ==  gchat_sender_id ? contact_1.id : contact_2.id

        rescue => e #yolo
          puts "error! event was probably not a chat message (like a photo or a hangout) at any rate this train aint stoppin"
          puts e
        end

        Message.create(
          {  :to_contact_id      => to_contact_id,
             :from_contact_id    => from_contact_id,
             :message_content    => text,
             :source_id          => GOOGLE_HANGOUTS_ID,
             :utc_received_time  => timestamp
          })
      end
    end
    true
  end
end
