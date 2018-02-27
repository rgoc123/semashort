class Link < ApplicationRecord

  validates :long_link, :short_link, presence: true

end
