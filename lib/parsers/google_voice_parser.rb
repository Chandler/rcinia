module GoogleVoiceParser
  def self.parse(source_path = "../sources/google_voice/cbabraham/voice/conversations/*.html")
    owner_contact = Contact.contact_from_username("Me")
    Dir.glob(source_path).each do |file_path|
      current_contact = Contact.contact_from_username(username_from_path(file_path))
      doc = Nokogiri::HTML(File.open(file_path))
      doc.css(".message").each do |message|
        if doc.at('div.message')
          from_name = message.css('.fn').text
          new_message = Message.create({ :to_contact_id      => from_name == "Me" ? current_contact.id : owner_contact.id,
                                         :from_contact_id    => from_name == "Me" ? owner_contact.id   : current_contact.id,
                                         :message_content    => message.at('q').text,
                                         :utc_received_time  => message.at('abbr')['title']
                                       })
        end
      end
    end
  end

  def self.username_from_path(path)
    File.basename(path, ".html").split("-").first.rstrip
  end
end