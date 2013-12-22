require 'json'
module GoogleLatitudeParser
  def self.parse
    geo = JSON.parse(File.read('../sources/latitude.json'))
    geo["data"]["items"].each do |item|
      Location.create({ :latitude  => item['latitude'],
                        :longitude => item['longitude'],
                        :datetime  => item['timestampMs']
                      
      })
    end
  end
end