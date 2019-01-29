# DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false|

### Association
- has_many :members
- has_many :messages
- has_many :groups, through: :members

## groupテーブル

|Column|Tyoe|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :members
- has_many :messages
- has_many :users, through: :members validates :name, presence :true

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|group|references|null: false|
|text|text|
|image|text|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user


* ...
