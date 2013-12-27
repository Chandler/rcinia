class Message < ActiveRecord::Base
  belongs_to :to_contact, :class_name => "Contact"
  belongs_to :from_contact, :class_name => "Contact"
  has_one    :message_location
  attr_accessible :to_contact_id, :from_contact_id, :message_content, :utc_received_time, :source_id

  def self.weekly_agg contact_id
    ActiveRecord::Base.connection.execute(
      "SELECT count(*) AS total,
      strftime('%Y-%m-%d',utc_received_time) as date,
      strftime('%W-%Y', utc_received_time, 'weekday 0', '-6 days') as week
      FROM messages
      WHERE messages.to_contact_id = #{contact_id}
      OR messages.from_contact_id =  #{contact_id}
      GROUP BY week
      ORDER BY date")
  end

  def self.messages_for_contact contact_id
    ActiveRecord::Base.connection.execute(
      "select count(*) as count
      from messages
      WHERE messages.to_contact_id = #{contact_id}
      OR messages.from_contact_id =  #{contact_id}").first["count"]
  end

  def self.all_weeks
    ActiveRecord::Base.connection.execute(
      "select
      strftime('%Y-%m-%d',utc_received_time) as date,
      strftime('%W-%Y', utc_received_time, 'weekday 0', '-6 days') as week
      from messages
      group by week
      order by date asc")
  end
end
