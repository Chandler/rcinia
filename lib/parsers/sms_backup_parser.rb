#this loads json produced by https://github.com/toffer/iphone-sms-backup into my sqlite db

require 'json'
module SmsBackupParser
  IPHONE_IMESSAGE_ID = 3

  def self.parse
    json = JSON.parse(File.read('../sources/imessage/sms_backup_2012_12_01_to_2013_12_08.json'))
    json.each do |message|
      from = Contact.contact_from_username(message["from"],  IPHONE_IMESSAGE_ID)
      to = Contact.contact_from_username(message["to"],  IPHONE_IMESSAGE_ID)
      Message.create(
        {  :to_contact_id      => to.id,
           :from_contact_id    => from.id,
           :message_content    => message["text"],
           :source_id          => IPHONE_IMESSAGE_ID,
           :utc_received_time  => message["date"]
        })
    end
    true
  end
end


