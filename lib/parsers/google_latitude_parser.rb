module GoogleLatitudeParser
  def self.parse
    path = "../sources/google_latitude/"
    doc = Nokogiri::XML(File.read(path + 'history.kml'))
    date_location = doc.css("when").zip doc.xpath("//gx:coord")
    date_location.each do |date, location|
      latitude, longitude = location.text.split(" ")
      Location.create({ :latitude  => latitude,
                        :longitude => longitude,
                        :datetime  => date.text
                      
      })
    end
  end
end