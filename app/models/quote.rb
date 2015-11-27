class Quote
  include Mongoid::Document

  embeds_many :votes

  field :body, type: String
  field :author, type: String
  field :category, type: String
end
