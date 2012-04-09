class Location < ActiveRecord::Base
  belongs_to :contact
  belongs_to :source
  has_one    :message_locationend 
  attr_accessible :contact_id, :latitude, :longitude, :datetime



  def self.geojson
    #Build geojson object. Really wish there was a gem for this..TODO, geojson gem.
    each_feature = []
    find(:all).each do |l|
      feature = { "type" => "Feature", "id" => l.id.to_s }
      feature["properties"] = {
        "time_id"     =>  time_id(l.datetime),
        "dayofweek"   =>  day_of_week(l.datetime)
      }
      feature["geometry"] = {
        "type"        => "Point",
        "coordinates" => [l.latitude.to_f, l.longitude.to_f]
      }
      each_feature << feature
    end
    geojson = {"type" => "FeatureCollection", "features" => each_feature }
    geojson.to_json
  end

  def self.time_id datetime
    (Time.parse(datetime).seconds_since_midnight/(1.day/96)).round
  end

  def self.day_of_week datetime
    dt = DateTime.parse(datetime)
    (dt.wday > 4 || dt.wday == 0)  ? "weekend" : "weekday"
  end
end