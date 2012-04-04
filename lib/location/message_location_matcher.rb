module MessageLocationMatcher
  def self.match
    Message.where("utc_received_time > '2012-01-1T00:00:00.000Z'").each do |m|
      location = best_location_match(m)
      if location
        #Rails.logger.debug(m.utc_received_time)
        MessageLocation.create(:message_id => m.id, :location_id => location.id)
      end
    end
  end

  def self.best_location_match(m)
    grace = 1.hour
    m_datetime = DateTime.parse(m.utc_received_time)
    closest = 0
    closest_location = nil
    Location.where("datetime < '#{m_datetime + grace}' AND datetime >  '#{m_datetime - grace}'").each do |l|
      l_datetime = DateTime.parse(l.datetime)
      if((m_datetime.to_i  - l_datetime.to_i) < (m_datetime.to_i - closest.to_i))
        closest = l.datetime
        closest_location = l
      end
    end
    closest_location
  end
end

