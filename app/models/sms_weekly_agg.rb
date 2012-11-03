require 'json'

class SmsWeeklyAgg< ActiveRecord::Base  
  attr_accessible :contact_id, :name, :message_count, :timeseries_data

  @all_weeks = Message.all_weeks;

  def self.update
    ActiveRecord::Base.connection.execute("DELETE FROM #{table_name}")
    Contact.all().each do |contact|
      self.update_contact contact
    end
  end

  def self.update_contact contact
    messages = Message.weekly_agg(contact.id)
    messages_hash = {}
    messages.each do |message|
      messages_hash[message["week"]] = message
    end

    values = []
    @all_weeks.each do |date|
        week = date["week"]
        x = self.epoch_milli_from_year_week week
        if  messages_hash.has_key? week
          y = messages_hash[week]["total"]
        else
          y = 0
        end
      values.push([x,y])
    end

    record = self.new({
      :contact_id => contact.id,
      :name => contact.display_name,
      :message_count => Message.messages_for_contact(contact.id),
      :timeseries_data => {
        :key =>contact.display_name,
        :values => values
      }.to_json
    })
    record.save
  end

  def self.epoch_milli_from_year_week week
    week_num, year = week.split("-")
    Chronic::parse(Date.commercial(year.to_i,week_num.to_i)).to_i*1000
  end
end