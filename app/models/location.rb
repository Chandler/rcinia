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
        "dayofweek"   =>  time_of_day(l.datetime)
      }
      feature["geometry"] = {
        "type"        => "Point",
        "coordinates" => [l.latitude.to_f, l.longitude.to_f]
      }
      each_feature << feature
    end
    geojson = { "type" => "FeatureCollection", "features" => each_feature }
    geojson.to_json
  end

  def self.time_of_day datetime
    dt = DateTime.parse(datetime)
    dt.wday > 4 ? "weekend" : "weekday"
  end
end