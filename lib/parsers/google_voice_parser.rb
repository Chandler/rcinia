module GoogleVoiceParser
  def self.parse
    Rails.logger.debug("ji")
    Dir.glob("../sources/google_voice/cbabraham/voice/conversations/*.html").each do |f|
      Rails.logger.debug(f)
    end
  end
end