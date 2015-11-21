class Quote
  include Mongoid::Document
  field :body, type: String
  field :author, type: String
  field :category, type: String
end
