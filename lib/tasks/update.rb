module Update
  def self.all
    # GoogleVoiceParser.parse
    # GoogleLatitudeParser.parse
    # MessageLocationMatcher.match
    # File.open(Rails.root.to_s + '/app/assets/chart_data/message_location.json', 'w') {|f| f.write(MessageLocation.geojson) }
    File.open(Rails.root.to_s + '/app/assets/chart_data/location.json', 'w') {|f| f.write(Location.geojson) }
  end

  def self.aggs
    SmsWeeklyAggs
  end
end