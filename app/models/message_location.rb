class MessageLocation < ActiveRecord::Base  
  belongs_to :message
  belongs_to :location
  attr_accessible :message_id, :location_id

  def self.geojson
    #Build geojson object. Really wish there was a gem for this..TODO, geojson gem.
    each_feature = []
    find(:all).each do |ml|
      contact  = ml.message.from_contact       
      feature = { "type" => "Feature", "id" => ml.id.to_s }
      feature["properties"] = {
        "owner"    => {:name => contact.contact_usernames[0].username, :id => contact.id},
        "nightday" => "night",
        "week"     => "weekend"
      }
      feature["geometry"] = {
        "type"        => "Point",
        "coordinates" => [ml.location.latitude.to_f, ml.location.longitude.to_f]
      }
      each_feature << feature
    end
    geojson = { "type" => "FeatureCollection", "features" => each_feature }
    geojson.to_json
  end

end
